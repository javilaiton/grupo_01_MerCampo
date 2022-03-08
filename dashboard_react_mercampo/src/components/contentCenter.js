import ProductsList from './productsList';
import UsersList from './usersList';
import LastProdInDb from './lastProdInDb';
import LastUsrInDb from './lastUsrInDb';
import Error404 from './Error404'
import MainIndex from './mainIndex';
import { Route, Routes} from 'react-router-dom';


function ContentCenter() {
    return (
        <Routes>
            <Route path="/" exact="true" element={<MainIndex/>} />
            <Route path="products" element={<ProductsList />} />
            <Route path="users" element={<UsersList />} />   
            <Route path="products/last" element={<LastProdInDb />} />
            <Route path="users/last" element={<LastUsrInDb />} />
            <Route path="*" element={<Error404/>} />
        </Routes>
    );
}

export default ContentCenter;