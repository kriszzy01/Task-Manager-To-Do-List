import {createSlice, nanoid, createEntityAdapter} from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.timeStamp.localeCompare(a.timeStamp)
});

const initialState = notesAdapter.getInitialState({
    showForm: false,
});

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNewNote: {
            reducer(state, action) {
                notesAdapter.addOne(state, action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        completed: false,
                        timeStamp: `${new Date().toLocaleDateString()} ~ ${new Date().toLocaleTimeString()}`
                    }
                }
            }
        },
        removeNote: {
            reducer(state, action) {
                notesAdapter.removeOne(state, action.payload)
            },
            prepare(id) {
                return {
                    payload: id
                }
            }
        },
        changeNoteStatus: {
            reducer(state, action) {
                const id = action.payload;
                const clickedNote = state.entities[id];

                if (clickedNote) clickedNote.completed = !clickedNote.completed;
            },
            prepare(id) {
                return {
                    payload: id
                }
            }
        }, 
        showNewNoteForm: {
            reducer(state) {
                state.showForm = !state.showForm;
            },
        }
    }
});

export default notesSlice.reducer;

export const {addNewNote, changeNoteStatus, showNewNoteForm, removeNote} = notesSlice.actions;

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
} = notesAdapter.getSelectors(state => state.notes);