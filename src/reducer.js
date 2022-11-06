export default (state, action) => {
    switch(action.type) {

        case "showModal":
            return {
                ...state,
                isModalVisible: true
            };

        case "hideModal":
            return {
                ...state,
                isModalVisible: false,
                noteContent: "",
                noteTitle: "",
                noteTitleLettersNumber: 0,
                noteContentLettersNumber: 0
            };

        case "changeNoteTitleHandler":
            return {
                ...state,
                noteTitle: action.payload,
                noteTitleLettersNumber: action.payload.length
            };

        case "changeNoteContentHandler":
            return {
                ...state,
                noteContent: action.payload,
                noteContentLettersNumber: action.payload.length
            };

        case "changeSearchQueryHandler":
            return {
                ...state,
                searchQuery: action.payload
            };

        case "clearSearchQuery":
            return {
                ...state,
                searchQuery: ""
            };

        case "createNote":
            if (state.noteContent.trim() && state.noteTitle.trim() && (state.noteContentLettersNumber <= state.maxNoteContentLettersNumber && state.noteTitleLettersNumber <= state.maxNoteTitleLettersNumber)) {
                const newNote = {
                    id: Date.now(),
                    noteTitle: state.noteTitle,
                    noteContent: state.noteContent
                };

                return {
                    ...state,
                    notes: [...state.notes, newNote],
                    isModalVisible: false,
                    noteContent: "",
                    noteTitle: "",
                    noteContentLettersNumber: 0,
                    noteTitleLettersNumber: 0
                }
            }

        case "removeNote":
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };

        default: 
            return state;
    }
}