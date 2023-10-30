import Websocket from "../modules/websocket/websocket";

class OrdersService {

    public insertOrder(order: any) {
        //save in your database

        //send the update to the browser
        this.updateSockets(order);
    }

    private updateSockets(order: any) {
        const io = Websocket.getInstance();
        io.of('orders').emit('orders_updated', { data: [order] });
    }
}

export default OrdersService;