const AnalyzeQuery = require('../models/analyzeQueryModel');

exports.getAllQueries = async (req, res) => {
  try {
    const queries = await AnalyzeQuery.getAll();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAnalyzeResult = async (req, res) => {
    try {
     const id = req.params.id;
     const query = await AnalyzeQuery.getById(id);
      const result = await AnalyzeQuery.getAnalyzeResultDB(query.sql_query);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

exports.getQueryById = async (req, res) => {
  try {
    const query = await AnalyzeQuery.getById(req.params.id);
    if (!query) return res.status(404).json({ message: 'Query not found' });
    res.json(query);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createQuery = async (req, res) => {
  try {
    const { title, sql_query } = req.body;
    const newQuery = await AnalyzeQuery.create(title, sql_query);
    res.status(201).json(newQuery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuery = async (req, res) => {
  try {
    const { title, sql_query } = req.body;
    await AnalyzeQuery.update(req.params.id, title, sql_query);
    res.json({ id: req.params.id, title, sql_query });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuery = async (req, res) => {
  try {
    await AnalyzeQuery.delete(req.params.id);
    res.json({ message: 'Query deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
