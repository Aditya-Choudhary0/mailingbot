import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ReplyPopup } from "./ReplyPopup";
import { useColorMode, useToast } from "@chakra-ui/react";

export const EmailDetail = () => {
    const { thread_id } = useParams();
    const token = localStorage.getItem('token');
    const toast = useToast();

    const [data, setData] = useState([]);
    const { colorMode, toggleColorMode } = useColorMode();
    const [showReplyBox, setShowReplyBox] = useState(false);

    const handleCtrlRKeyPress = function(event) {
        if (event.ctrlKey && event.key === 'r') {
            event.preventDefault();

            console.log("Ctrl + R pressed");
            setShowReplyBox(true);
        }
    };

    const handleCtrlDKeyPress = function(event) {
        if (event.ctrlKey && event.key === 'd') {
            event.preventDefault();
            // Call the function to handle delete functionality
            handleDeleteConfirmation();
        }
    };

    useEffect(() => {
        if (thread_id && token) {
            getEmailData(thread_id, token).then(res => {
                setData(res.data.data);
            })
        }

        document.addEventListener('keydown', handleCtrlRKeyPress);
        document.addEventListener('keydown', handleCtrlDKeyPress);

        return () => {
            document.removeEventListener('keydown', handleCtrlRKeyPress);
            document.removeEventListener('keydown', handleCtrlDKeyPress);
        };

    }, [thread_id, token]);

    const getEmailData = async (thread_id, token) => {
        try {
            let res = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
            });
            return res;
        } catch (err) {
            console.log('get email data error:', err);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": 'application/json'
                },
            });
            toast({
                title: "Email Deleted",
                description: "The email has been deleted.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (err) {
            console.log('delete email error:', err);
            toast({
                title: "Error",
                description: "Failed to delete the email.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleDeleteConfirmation = () => {

        const title = "Delete Confirmation";
        const description = "Are you sure you want to delete this email?";

        toast({
            title,
            description,
            status: "warning",
            duration: 2000,
            isClosable: true,
            render: ({ onClose }) => (
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button onClick={handleDelete} className={`border border-solid rounded px-4 py-2 focus:outline-none mr-4 bg-red-500 text-white`}>
                        OK
                    </button>
                    <button onClick={onClose} className="border border-solid rounded px-4 py-2 focus:outline-none bg-gray-500 text-white">Cancel</button>
                </div>
            )
        });
    };

    return (
        <div className={`text-left ${colorMode === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            <div className="border-b border-solid flex justify-between items-center px-4 py-5">
                <div className="w-1/2 space-y-2">
                    <p className="font-semibold text-base">{data.length > 0 && data[0].fromName}</p>
                    <p className="text-sm">{data.length > 0 && data[0].fromEmail}</p>
                </div>
                <div className="w-1/2 flex justify-end space-x-4 text-sm font-semibold">
                    <select className="border border-solid rounded px-4 py-2 focus:outline-none" defaultValue="meeting_completed">
                        <option value="meeting_completed">Meeting Completed</option>
                    </select>
                    <select className="border border-solid rounded px-4 py-2 focus:outline-none" defaultValue="move">
                        <option value="move">Move</option>
                    </select>
                    <div className="w-1/2 flex justify-end space-x-4 text-sm font-semibold">
                        <select className="border border-solid rounded px-4 py-2 focus:outline-none" defaultValue="">
                            <option value="" disabled hidden>&#8230;</option>
                            {data.length > 0 && data[0].isRead ? (
                                <option value="markAsUnread">Mark as Unread</option>
                            ) : (
                                <option value="markAsRead">Mark as Read</option>
                            )}
                            <option value="delete" onClick={handleDeleteConfirmation}>Delete</option>
                        </select>
                    </div>
                </div>
            </div>
            {data.map((user, i) => (
                <div key={i} className="text-left space-y-2 mt-10 mx-4 p-4 border border-solid border-gray-700 rounded">
                    <div className="flex justify-between">
                        <p className="font-semibold text-base">{user.subject}</p>
                        <p className="text-sm">{user.sentAt}</p>
                    </div>
                    <div className="flex text-sm">
                        <p>from: {user.fromEmail}</p>
                        {user.cc && user.cc.map((item, i) => (
                            <p key={i}>cc: {item}</p>
                        ))}
                    </div>
                    <p className="text-sm">to: {user.toEmail}</p>
                    <div dangerouslySetInnerHTML={{ __html: user.body }} className="pl-1 text-sm"></div>
                </div>
            ))}
            <div className="mt-5">
                <ReplyPopup threadId={thread_id} token={token} showReplyBox={showReplyBox}/>
            </div>
        </div>
    );
};
