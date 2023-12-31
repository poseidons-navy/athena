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
export function createGenre(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { error } = yield supabaseClient.from('Genres').insert({ genre: name });
            // Throw an error if error is not null
            if (error != null) {
                console.log(error);
                throw new MyError(ErrorMessages['NOT_CREATE_GENRE']);
            }
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
//# sourceMappingURL=createGenre.js.map