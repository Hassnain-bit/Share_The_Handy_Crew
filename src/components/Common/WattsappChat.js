import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
function WattsappChat() {
    return (
        <div>
            <WhatsAppWidget
			phoneNo="923044168480"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={5000}
			messageBox={false}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="46"
			iconColor="black"
			iconBgColor="#72f0a0"
			headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="black"
			headerTitle="The Handy Crew"
			headerCaption="Online"
			bodyBgColor="white"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="black"
			btnBgColor="#72f0a0"
			btnTxtColor="black"
		/>
        </div>
    )
}

export default WattsappChat
