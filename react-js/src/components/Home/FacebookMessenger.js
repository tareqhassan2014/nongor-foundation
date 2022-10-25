import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookMessenger = () => {
    return (
        <MessengerCustomerChat
            pageId={process.env.REACT_APP_FACEBOOK_PAGE_ID}
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        />
    );
};

export default FacebookMessenger;
