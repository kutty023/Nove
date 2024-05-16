const express = require('express')
const router = express.Router()
const NovelistUserModal = require('./modals/NovelistUserModal')
const NovelsModal = require('./modals/NovelsModal')

// CRUD operations
// Create/post request for novelist
router.post('/api/novelistUserData', async(req, res)=>{
    try{
        const newUserData = await NovelistUserModal.create(req.body)
        res.status(201).json(newUserData)
    }catch (err){
        console.error("Error catching data :",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Create/post request for novels
router.post('/api/novelsData', async(req, res)=>{
    try{
        const newNovelData = await NovelsModal.create(req.body)
        res.status(201).json(newNovelData)
    }catch (err){
        console.error("Error catching data :",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Read/get request
// Fetching all the users for novelist
router.get('/api/novelistUserData', async(req, res)=>{
    try{
        const novelistUsersData = await NovelistUserModal.find()
        if(novelistUsersData === null){
            return res.json("No enties found")
        }
        res.json(novelistUsersData)
    }catch(err){
        console.error("Error fetching data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Fetching all the users for novelist
router.get('/api/novelsData', async(req, res)=>{
    try{
        const novelsListData = await NovelsModal.find()
        if(novelsListData === null){
            return res.json("No enties found")
        }
        res.json(novelsListData)
    }catch(err){
        console.error("Error fetching data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Fetch user by id for novelist
router.get('/api/novelistUserData/:id', async(req, res)=>{
    try{
        const novelistUserData = await NovelistUserModal.findById(req.params.id)
        if(!novelistUserData){
            return res.status(404).json({error: "User not found"})
        }
        res.json(novelistUserData)
    }catch(err){
        console.error("Error fetching data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Fetch user by id for novelist
router.get('/api/novelsData/:id', async(req, res)=>{
    try{
        const novelsListData = await NovelsModal.findById(req.params.id)
        if(!novelsListData){
            return res.status(404).json({error: "Data not found"})
        }
        res.json(novelsListData)
    }catch(err){
        console.error("Error fetching data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Update/put(or)patch request for novelist
router.put('/api/novelistUserData/:id', async (req, res) => {
    try {
        // Find the user by ID and update with the request body data
        const updateNovelistUserData = await NovelistUserModal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // If user is not found, return a 404 status code
        if (!updateNovelistUserData) {
            console.log(`User with ID: ${req.params.id} not found`);
            return res.status(404).json({ error: "User not found" });
        }
        
        // Respond with the updated user data
        res.json(updateNovelistUserData);
    } catch (err) {
        // Log the error and respond with a 500 status code
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update/put(or)patch request for novels
router.put('/api/novelsData/:id', async (req, res) => {
    try {
        // Find the user by ID and update with the request body data
        const updateNovelsListData = await NovelsModal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // If user is not found, return a 404 status code
        if (!updateNovelsListData) {
            console.log(`User with ID: ${req.params.id} not found`);
            return res.status(404).json({ error: "User not found" });
        }
        
        // Respond with the updated user data
        res.json(updateNovelsListData);
    } catch (err) {
        // Log the error and respond with a 500 status code
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Delete/delete request for novelist
router.delete('/api/novelistUserData/:id', async(req, res)=>{
    try{
        const deleteNovelistUserData = await NovelistUserModal.findByIdAndDelete(req.params.id)
        if(!deleteNovelistUserData){
            return res.status(404).json({error : "User not found, unable to delete the user data"})
        }
        res.json({message : "User data deleted successfully"})
    }catch(err){
        console.error("Error deleting data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

// Delete/delete request for novels
router.delete('/api/novelsData/:id', async(req, res)=>{
    try{
        const deleteNovelsData = await NovelsModal.findByIdAndDelete(req.params.id)
        if(!deleteNovelsData){
            return res.status(404).json({error : "Data not found, unable to delete the novels data"})
        }
        res.json({message : "Data deleted successfully"})
    }catch(err){
        console.error("Error deleting data:",err)
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router