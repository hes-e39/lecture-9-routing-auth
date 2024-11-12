import { useParams } from 'react-router-dom';

const Other = () => {
    const { itemId } = useParams();

    return (
        <div>
            Other <b>{itemId}</b>
        </div>
    );
};

export default Other;
