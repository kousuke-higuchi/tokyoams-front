import Service from "~~/services/service";
import { AtfAdminoffice } from "~~/types/atf";

/**
 * 配電盤系のAPIを提供します。
 */
class AtfService extends Service {
    public getOffices() {
        return this.http.get<AtfAdminoffice[]>("/api/atf/offices");
    }
}
export default new AtfService();