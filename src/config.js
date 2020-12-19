const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "trypcloud-notes",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://rrmra6wpq2.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_QCloTUXAh",
        APP_CLIENT_ID: "otoln50qluijkqup76hqp3v4u",
        IDENTITY_POOL_ID: "us-east-1:0302f5f0-546d-469d-96f8-053e57e68bfc",
    },
};

export default config;