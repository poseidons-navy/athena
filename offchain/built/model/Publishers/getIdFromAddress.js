var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ErrorMessages } from "../../constants.js";
import MyError from "../../myError.js";
import { supabaseClient } from "../../constants.js";
export default function getPublisherIDFromAddress(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get Publisher ID
            const { data, error } = yield supabaseClient
                .rpc('get_publisher_id', { address: address });
            // Throw an error if error is not null
            if (error != null) {
                console.log(error);
                throw new MyError(ErrorMessages['NOT_GET_USER_ID']);
            }
            if (data == null) {
                throw new MyError(ErrorMessages['USER_NOT_EXIST']);
            }
            let publisher_id = Number.parseInt(data);
            return publisher_id;
        }
        catch (err) {
            console.log(err);
            if (err instanceof MyError) {
                throw err;
            }
            else {
                throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
            }
        }
    });
}
// Testing if function works
// async function main() {
//     let id = await getPublisherIDFromAddress("1")
//     console.log(`Publisher is: ${id}`);
// }
// main();
//# sourceMappingURL=getIdFromAddress.js.map