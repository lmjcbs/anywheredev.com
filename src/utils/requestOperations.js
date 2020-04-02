const AirtablePlus = require('airtable-plus');

const airtable = new AirtablePlus({
    baseID: process.env.REACT_APP_AIRTABLE_BASE_ID,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
    tableName: process.env.REACT_APP_AIRTABLE_TABLE_NAME,
});

export const fetchAirtableData = async () => {
  try {
      const response = await airtable.read({});
      return response.map(record => record.fields)
  }catch (error) {
      console.log(error)
  }
}
