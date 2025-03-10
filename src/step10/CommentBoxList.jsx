import { useState } from "react";
import './Comment.css'
import { CommentBox } from "./CommentBox";

export function CommentBoxList() {
    const comments = [
        {name: '손흥민', comment:'정말 재미있는 영화였음'},
        {name: '홍길동', comment:'정말 감동의 서사시였음'},
    ]
    return(
        <>
        {
            comments.map(
                (comm) => {
                    return(
                        <CommentBox name={comm.name} comment={comm.comment}></CommentBox>
                    )
                }
            )
        }
        </>
    )
}