class VentasService {
    constructor() {
        this.baseUrl = "https://arcadelaalianzaserver.onrender.com";
        this.token = this.getTokenFromStorage();
    }

    getTokenFromStorage() {
        return localStorage.getItem("authToken");
    }

    async getVentas() {

        const response = await fetch(`${this.baseUrl}/orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        }

        )


        if (!response.ok) {
            console.log("error al inciar sesion")
        }
        const data = await response.json()
        console.log(data)
        return data;
    }

    async getVentasById(id) {

        const response = await fetch(`${this.baseUrl}/orders/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        }

        )


        if (!response.ok) {
            console.log("error al inciar sesion")
        }
        const data = await response.json()
        console.log(data)
        return data;
    }

    async FinalizeOrder(orderId) {
        const response = await fetch(`${this.baseUrl}/orders/${orderId}/finalize`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
          }
    
        }
        )
        if (!response.ok) {
          console.log("error ")
        }
        const data = await response.text()
        console.log(data)
        return data;
      }
}


export default VentasService