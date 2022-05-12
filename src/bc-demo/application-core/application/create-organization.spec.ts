import {CreateOrganization} from "./create-organization";
import BcDemoFactory from "../../bc-demo-factory";
import {OrganizationName} from "../../domain/organization-name";
import {AppDataSource} from "../../../data-source";
import {TestHelper} from "../../../tests/utils/test-helper";
import {createConnection, DataSource, getConnection} from "typeorm";
import {Organization} from "../../infrastructure/postgres/organization/organization";


//TODO rename file into integration.ts ?

describe(`${CreateOrganization.name}`, () => {
    let useCase: CreateOrganization;
    let init: DataSource;
    beforeEach(async () => {

        init = await AppDataSource.initialize();


        useCase = new CreateOrganization(BcDemoFactory.organizationRepository());


        //in memory
        /*return createConnection({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [Organization],
            synchronize: true,
            logging: false
        });*/

        //or psql real db
        //await TestHelper.instance.setupTestDB();
    });

    afterEach(() => {
        init.destroy()


        // in memory
        /*let conn = getConnection();
        return conn.close();*/

        //or psql real db
        //TestHelper.instance.teardownTestDB();
    });

    it('should create a new organization', async () => {
        // Given


        const name = new OrganizationName('Zenika');
        // When
        const newSchedule = await useCase.create(name);

        // Then
        expect(newSchedule).toBeDefined()
        expect(newSchedule.organizationName.value).toEqual('Zenika')
    })
})
