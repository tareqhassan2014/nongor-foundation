import { useParams } from 'react-router-dom';

const DonateFailed = () => {
    // set title
    document.title = 'Fail | Nongor Frontend';
    const { tran_id } = useParams();
    return (
        <div>
            <h1>This is Donation failed Page</h1>
            <p>Transaction ID: {tran_id}</p>
        </div>
    );
};

export default DonateFailed;
