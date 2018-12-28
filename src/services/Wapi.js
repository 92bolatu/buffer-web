import http from '../common/Http';

const api = '/api';

const Wapi = {
    Inventory: {
        Sync: (items) => http.post(`${api}/inventory`, items),
    }
};

export default Wapi;
