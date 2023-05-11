import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

import { BoxText, TextMessage, TextTime } from "./styles";

dayjs.extend(relativeTime);
const A = [
  {
    id: (Math.random() * 10000000).toString(),
    chatRoomId: "1",
    userId: "12",
    content: "Hello Message",
    createdAt: "2023-05-08T15:00:00.000Z",
  },
  {
    id: "1",
    chatRoomId: "1",
    userId: "12",
    content: "dfgdfgdfgdfgdfg1",
    createdAt: "2023-05-08T12:00:00.000Z",
  },
  {
    id: "2",
    chatRoomId: "1",
    userId: "12",
    content: "Are you GPS take me to your heart sdfds sdfsdfsdf sdfsdf ? ",
    createdAt: "2023-05-18T13:00:00.000Z",
  },
  {
    id: "3",
    chatRoomId: "1",
    userId: "12",
    content: "Helldgdfgdfgdfgdfgo",
    createdAt: "2023-05-08T15:10:00.000Z",
  },
  {
    id: "4",
    chatRoomId: "1",
    userId: "12",
    content: "1dfgdfgdgdfgdfg",
    createdAt: "2023-05-08T12:10:00.000Z",
  },
  {
    id: "12",
    chatRoomId: "1",
    userId: "12",
    content: "2dfgdfgfdfgfdgfg",
    createdAt: "2023-05-08T13:10:00.000Z",
  },
];

const B = [
  {
    id: "5",
    chatRoomId: "1",
    userId: "13",
    content: "Hello I'm B",
    createdAt: "2023-05-08T12:12:00.000Z",
  },
  {
    id: "6",
    chatRoomId: "1",
    userId: "13",
    content: "6dfgdfgfdgdgfdgfd",
    createdAt: "2023-10-08T13:30:00.000Z",
  },
  {
    id: "7",
    chatRoomId: "1",
    userId: "13",
    content: "898dgdfgdfgfdgdfgdfg9",
    createdAt: "2023-05-08T15:30:00.000Z",
  },
];

function LeftMessage(message: any) {
  const { content, createAt, userId } = message;
  return (
    <Box className="flex justify-start">
      <Stack>
        <BoxText isMe={userId !== "12"}>
          <TextMessage>{content}</TextMessage>
        </BoxText>
        <TextTime>{dayjs(createAt).fromNow()}</TextTime>
      </Stack>
    </Box>
  );
}

function RightMessage(message: any) {
  const { content, createAt, userId } = message;
  return (
    <Box className="flex justify-end">
      <Stack alignItems="end">
        <BoxText isMe={userId === "12"}>
          <TextMessage>{content}</TextMessage>
        </BoxText>
        <TextTime>{dayjs(createAt).fromNow()}</TextTime>
      </Stack>
    </Box>
  );
}

function ContentMessage() {
  const [MessageMock, setMessageMock] = useState(B.concat(A));

  return (
    <Stack
      className="max-h-[380px] overflow-auto no-scrollbar mx-2 mt-2"
      spacing={4}
    >
      {MessageMock.map((message) => {
        if (message.userId === "12") {
          return (
            <RightMessage
              key={message.id}
              content={message.content}
              createAt={message.createdAt}
            />
          );
        }
        return (
          <LeftMessage
            content={message.content}
            createAt={message.createdAt}
            key={message.id}
          />
        );
      })}
    </Stack>
  );
}

export default ContentMessage;
