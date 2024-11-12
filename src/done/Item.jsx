import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams();

    return <div>ID: {id}</div>;
};

export default Item;
