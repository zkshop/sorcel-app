import {envVars as $46POc$envVars} from "@3shop/config";
import $46POc$axios from "axios";



async function $bb70538c4cb4b272$export$2fa187e846a241c4(payload) {
    const res = await (0, $46POc$axios)((0, $46POc$envVars).PUBLIC_HASURA_API_URL || "", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-hasura-admin-secret": (0, $46POc$envVars).SECRET_HASURA
        },
        data: JSON.stringify(payload)
    });
    return res.data;
}
async function $bb70538c4cb4b272$export$57e795267c26e600(payload) {
    const res = await (0, $46POc$axios)((0, $46POc$envVars).PUBLIC_HASURA_API_URL || "", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-hasura-admin-secret": (0, $46POc$envVars).SECRET_HASURA
        },
        data: JSON.stringify(payload)
    });
    console.log("url", (0, $46POc$envVars).PUBLIC_HASURA_API_URL);
    console.log("response", {
        errors: res.data.errors
    });
    return res.data;
}
var $bb70538c4cb4b272$export$2e2bcd8739ae039 = {
    mutate: $bb70538c4cb4b272$export$57e795267c26e600,
    query: $bb70538c4cb4b272$export$2fa187e846a241c4
};


async function $364aee864d0ad976$export$4e373c34abfa8c68(name) {
    const mutation = `
  mutation CreateApp($name: String!) {
    insert_app_one(object: {name: $name}) {
      id
      plan
      name
    }
  }`;
    const payload = {
        query: mutation,
        variables: {
            name: name
        }
    };
    try {
        const response = await (0, $bb70538c4cb4b272$export$2e2bcd8739ae039).mutate(payload);
        if (!response.data) throw new Error("No data returned from API");
        return response.data.insert_app_one;
    } catch (error) {
        console.error("An error occurred while creating an app:", error);
    }
}



async function $c1aa5084cb11f34c$export$b043d75f7a445b5f(email, app_id) {
    const mutation = `
    mutation CreateUser($email: String!, $app_id: uuid!) {
      insert_user_one(object: {email: $email, app_id: $app_id, role: "CUSTOMER"}) {
        app_id
        email
        id
        role
      }
    }`;
    const payload = {
        query: mutation,
        variables: {
            email: email,
            app_id: app_id
        }
    };
    try {
        const response = await (0, $bb70538c4cb4b272$export$2e2bcd8739ae039).mutate(payload);
        return response.data?.insert_user_one;
    } catch (error) {
        console.error("An error occurred while creating a user:", error);
    }
}


const $97953d1ca2164af1$export$7053af9d031b0f62 = ()=>{
    return new Promise((resolve, reject)=>{
        // Simulate async user creation
        setTimeout(()=>{
            const user = {
                id: 1,
                name: "Test User"
            };
            resolve(user);
        }, 1000);
    });
};
const $97953d1ca2164af1$var$createAppMock = async (name)=>{
    // Mocked response for createApp
    return {
        plan: "pro",
        id: "mocked-app-id",
        name: name,
        createdAt: new Date().toISOString()
    };
};
const $97953d1ca2164af1$var$createAdminMock = async (email, appId)=>{
    // Mocked response for createAdmin
    return {
        app_id: "test",
        role: "test",
        id: "mocked-admin-id",
        email: email,
        appId: appId,
        createdAt: new Date().toISOString()
    };
};
function $97953d1ca2164af1$export$407133b701ade36d() {
    return {
        createApp: async (name)=>{
            const response = await (0, $364aee864d0ad976$export$4e373c34abfa8c68)(name);
            return response || null;
        },
        createAdmin: async (email, appId)=>{
            const response = await (0, $c1aa5084cb11f34c$export$b043d75f7a445b5f)(email, appId);
            return response || null;
        }
    };
}


const $39e1a7897e99b2f9$var$creator = (0, $97953d1ca2164af1$export$407133b701ade36d)();
const $39e1a7897e99b2f9$export$14d02acde87e0a38 = async (req, res)=>{
    $39e1a7897e99b2f9$var$creator.createApp("test");
    res.send("getPaperToken");
// const { code } = req.body as { code: string };
// try {
//   const userToken = await Token.getToken(code);
//   res.status(OK).json({ userToken });
// } catch (e) {
//   console.error({ e });
//   res.status(INTERNAL_SERVER_ERROR).json(e);
// }
};


export {$39e1a7897e99b2f9$export$14d02acde87e0a38 as getPaperToken};
//# sourceMappingURL=index.js.map
