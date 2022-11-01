import { useParams } from 'react-router-dom';

const DonateSuccess = () => {
    // set title
    document.title = 'Success | Nongor Frontend';

    const { tran_id } = useParams();
    return (
        <div>
            <h1>Donate Success</h1>
            <p>Transaction ID: {tran_id}</p>
        </div>
    );
};

export default DonateSuccess;
