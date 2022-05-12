import {Connection, createConnection } from 'typeorm';
import {Organization} from "../../bc-demo/infrastructure/postgres/organization/organization";
import {DB_PASSWORD, DB_USER} from "../../env";

export class TestHelper {

    private static _instance: TestHelper;

    private constructor() {}

    public static get instance(): TestHelper {
        if(!this._instance) this._instance = new TestHelper();

        return this._instance;
    }

    private dbConnect!: Connection;
    private testdb!: any;


    async setupTestDB() {
        this.dbConnect = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: DB_USER,
            password: DB_PASSWORD,
            database: "mydb",
            synchronize: true,
            logging: false,
            entities: [Organization],
            subscribers: [],
            migrations: [],
        });
    }

    teardownTestDB() {
        this.dbConnect.close();
        this.testdb.close();
    }

}
