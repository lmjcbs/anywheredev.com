const AirtablePlus = require('airtable-plus');

const airtable = new AirtablePlus({
    baseID: process.env.REACT_APP_AIRTABLE_BASE_ID,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
    tableName: process.env.REACT_APP_AIRTABLE_TABLE_NAME,
});

export const fetchAirtableData = () => (
  new Promise(async (resolve, reject) => {
    try {
      const response = await airtable.read({});
      const positions = response.map(record => record.fields)
      resolve(positions)
    }catch (error) {
      console.log(error)
      reject(error)
    }
  })
)
