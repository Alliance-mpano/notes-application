
const {User} = require('../../mongodb/model');
const mongoose = require('mongoose');

let { 
  checkEmail, 
  createUser, 
  editTodo, 
  createTodo, 
  deleteTodo, 
  deleteUser,
  checkAuth,
  getTodoAll
} = require('../../mongodb/services')


describe('Test services', () => {
  let db;
  const fakeNotes = [
    {
      _id:'61e930fdb0c7fa200876eca6',
      body:'Reading Java'
    },
    {
      _id:'61e9a0fdb0c7fa200876eca8',
      body:'Reading Nodejs'
    },
    {
      _id: '5dbff32e367a343830cd2f49',
      body: 'Adding another prompt on my podcast'
    }
  ]
  const fakeNote = {
    body: 'Adding another prompt on my podcast'
  }
  
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    db = mongoose.connection;
    // mongoose.connection.dropCollection('users');
  });
  afterAll(async () => {
    await db.close();
  });

  
    it('should create note', async () => {
      await addNote(fakeNote.body);
      const insertedNote = await Note.findOne({body: fakeNote.body});
      expect(insertedNote.body).toEqual(fakeNote.body);
    });



    it('should edit note', async () => {
      
      const mockNote = {_id: '61e927360beb3087386c2b3a',body: 'Earning coins on Wattpad'};
      await updateNote(mockNote._id, mockNote.body);
      let note = await Note.findOne({_id: user._id});
      const editedIndex = note.findIndex(x=> String(x._id)==String(mockNote._id));
      expect(note.body).toEqual(mockNote.body);
    });

    // to fix later
    it('delete note ',async()=>{
      const mockedId = '61e927360beb3087386c2b3a';
      const deletedNote = await deleteNote(mockedId)
      expect(deletedNote.ok).toEqual(1)
    })

    
    it('should get all notes', async() => {
     
       /*Mock mongoose findOne*/
       jest.spyOn(Note, 'find').mockReturnValue(Promise.resolve(fakeNotes))
        const response = await getTodoAll(fakeUser.id);
        expect(response).toBe(fakeUser.todo);
    })

    it('Should delete note successfully', async() => {
       /*Mock mongoose findOne*/
       jest.spyOn(Note, 'findOne').mockReturnValue(Promise.resolve(fakeNote));
       const response = await deleteNote(fakeNote._id);
       expect(response.success).toBe(true);
    });

    it('Should return false success when an error is thrown', async() => {
      /*Mock mongoose findOne*/
      jest.spyOn(Note, 'findOne').mockReturnValue(Promise.resolve(fakeNote));
      /*Mock mongoose updateOne*/
      jest.spyOn(Note, 'updateOne').mockReturnValue(Promise.resolve(null));
      const response = await deleteNote(fakeNote._id);
      expect(response.success).toBe(false);
   });

  });