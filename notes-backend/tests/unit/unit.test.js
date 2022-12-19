const { deleteNote } = require("../../controllers/notes.controller");
const { createNote } = require("../../services/notes.services")

it("should create new note", async () => {
    const saved = await createNote("New note");
    expect(saved.body).toBe("New note")
})

it("should delete note", async () => {
    const deleted = await deleteNote("61e927360beb3087386c2b3a");
    expect(deleted._id).toBe("61e927360beb3087386c2b3a");
})
