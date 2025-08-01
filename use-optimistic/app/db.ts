import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";

export const db = createStorage({
    driver: fsDriver({
        base: "db"
    })
});

