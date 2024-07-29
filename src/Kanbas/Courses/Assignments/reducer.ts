import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { assignments as dbAssignments } from '../../Database';

export interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  course: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: dbAssignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      const newAssignment = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = action.payload;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
