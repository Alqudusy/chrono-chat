import MessageInput from "./MessageInput";
import NavBar from "./NavBar";
import NoMessage from "./NoMessage";
import SideBar from "./SideBar";

const ChatPage = () => {
    return (
        <>
            <SideBar />
            <div style={{ width: '75%', height: '100vh', backgroundColor: "#0a0f23", color: "rgb(160, 160, 160)", position: 'fixed', right: '0' }}>
                <NavBar />

                <div className="chat-container container p-3">
                    <NoMessage />
                </div>

                <MessageInput />
            </div>
        </>
    )
}

export default ChatPage;
