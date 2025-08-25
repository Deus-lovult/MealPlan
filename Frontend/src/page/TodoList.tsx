import {
  Alert,
  Button,
  Checkbox,
  Container,
  Field,
  Input,
  List,
  Text,
  type CheckboxCheckedChangeDetails,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Navbar } from "../components/navbar/Navbar";
import type { TaskType } from "../type/TaskType";
type ErrorType = {
  hasAddError: boolean;
  hasEditError: boolean;
  errorTitle: string;
  errorMsg: string;
};

export const TodoList = () => {
  const [task, setTask] = useState<Array<TaskType>>([]);
  const [completeTask, setCompleteTask] = useState<Array<TaskType>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorInfo, setErrorInfo] = useState<ErrorType>();

  //全件取得関数
  const initGetTodo = async () => {
    setErrorInfo(undefined);
    await axios
      .get(`${import.meta.env.VITE_API_SERVER}/todo/get`)
      .then((result) => {
        console.log(result.data);
        setTask(result.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const initGetCompleteTodo = async () => {
    setErrorInfo(undefined);
    await axios
      .get(`${import.meta.env.VITE_API_SERVER}/todo/getComplete`)
      .then((result) => {
        console.log(result.data);
        setCompleteTask(result.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //初期表示時に全件取得
  useEffect(() => {
    initGetTodo();
    initGetCompleteTodo();
  }, []);

  //追加ボタン押下後
  const onClickAdd = async () => {
    setErrorInfo(undefined);
    if (inputRef.current) {
      if (inputRef.current.value.trim()) {
        //入力値が空白のみではない場合

        //body用Json
        const bodyText = {
          contents: inputRef.current.value,
          completeflg: "0",
          deleteflg: false,
        };

        //API呼び出し
        await axios
          .post(`${import.meta.env.VITE_API_SERVER}/todo/post`, bodyText)
          .catch((e) => {
            console.error(e);
          });

        await initGetTodo();

        //入力値リセット
        inputRef.current.value = "";
      } else {
        //空白のみの場合エラーメッセージ追加
        const error: ErrorType = {
          hasAddError: true,
          hasEditError: false,
          errorTitle: "無効なフィールド値",
          errorMsg: "空白のみの追加はできません",
        };

        setErrorInfo(error);
      }
    }
  };

  //チェックボックス押下後
  const onCheckBox = async (
    element: CheckboxCheckedChangeDetails,
    id: number
  ) => {
    if (element.checked) {
      await axios
        .put(`${import.meta.env.VITE_API_SERVER}/todo/${id}/putComplete`, {
          completeflg: "1",
        })
        .catch((e) => {
          console.error(e);
        });
      await initGetTodo();
      await initGetCompleteTodo();
    }
  };

  //編集ボタン押下時
  const onClickEdit = async (id: number) => {
    const target = task?.find((t) => t.id === id);
    if (target) {
      if (target.contents.trim()) {
        await axios
          .put(`${import.meta.env.VITE_API_SERVER}/todo/${id}/putContent`, {
            contents: target.contents,
          })
          .catch((e) => {
            console.error(e);
          });

        await initGetTodo();
        await initGetCompleteTodo();
      } else {
        //空白のみの場合エラーメッセージ追加
        const error: ErrorType = {
          hasAddError: false,
          hasEditError: true,
          errorTitle: "無効なフィールド値",
          errorMsg: "空白のみの追加はできません",
        };

        setErrorInfo(error);
      }
    }
  };

  //コンテンツ編集
  const editContents = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newTask = [...task];
    newTask[index] = {
      ...newTask[index],
      contents: e.target.value,
    };
    setTask(newTask);
  };

  //削除ボタン押下時
  const onClickDelete = () => {
    if (completeTask) {
      completeTask.map(async (value) => {
        await axios
          .put(`${import.meta.env.VITE_API_SERVER}/todo/${value.id}/delete`, {
            deleteflg: true,
          })
          .catch((e) => {
            console.error(e);
          });
        await initGetTodo();
        await initGetCompleteTodo();
      });
    }
  };

  return (
    <>
      <Navbar />
      <Container mt={15}>
        {errorInfo && (errorInfo.hasEditError || errorInfo.hasAddError) && (
          <>
            <Alert.Root status="error" mb={5}>
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{errorInfo.errorTitle}</Alert.Title>
                <Alert.Description>{errorInfo.errorMsg}</Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </>
        )}

        <div>
          <div>
            <Text textAlign="center" textStyle="4xl" mb={5}>
              買い物リスト
            </Text>
          </div>
          <div>
            <Container display="flex" mb={5}>
              <Field.Root
                invalid={(errorInfo && errorInfo.hasAddError) || false}
              >
                <Input ref={inputRef} />
              </Field.Root>
              <Button onClick={onClickAdd} ml={4}>
                追加
              </Button>
            </Container>
          </div>
        </div>
        <div>
          <Text textAlign="center" textStyle="4xl" mb={5}>
            未完了
          </Text>
          <div>
            <List.Root unstyled={true} minH="40vh">
              {task &&
                task.map((value, index) => {
                  return (
                    <List.Item key={value.id} mb={5}>
                      <Checkbox.Root
                        onCheckedChange={(e) => {
                          onCheckBox(e, value.id);
                        }}
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label display="flex">
                          <Field.Root
                            invalid={
                              (errorInfo && errorInfo.hasEditError) || false
                            }
                          >
                            <Input
                              id={String(value.id)}
                              value={value.contents}
                              onChange={(e) => {
                                editContents(e, index);
                              }}
                            />
                          </Field.Root>
                          <Button
                            onClick={() => onClickEdit(value.id)}
                            ml={4}
                            bgColor="black"
                          >
                            <IconContext.Provider
                              value={{
                                color: "white",
                              }}
                            >
                              <HiOutlinePencilSquare />
                            </IconContext.Provider>
                          </Button>
                        </Checkbox.Label>
                      </Checkbox.Root>
                    </List.Item>
                  );
                })}
            </List.Root>
          </div>
          <hr />
          <div>
            <Text textAlign="center" textStyle="4xl" mb={5}>
              完了
            </Text>
            <div>
              <List.Root minH="40vh">
                {completeTask &&
                  completeTask.map((value) => {
                    return (
                      <List.Item key={value.id}>
                        <Text
                          css={{ "text-decoration": "line-through" }}
                          ml={4}
                          mb={5}
                        >
                          {value.contents}
                        </Text>
                      </List.Item>
                    );
                  })}
              </List.Root>
            </div>
          </div>
        </div>
        <Button onClick={onClickDelete}>完了したタスクを削除する</Button>
      </Container>
    </>
  );
};
