export interface Task {
    id?: string;
    title: string;
    description: string;
}

export interface TaskDialogData {
    task: Partial<Task>;
    enableDelete: boolean
}

export interface TaskDialogResult {
    task: Task,
    delete?: boolean
}

export type ListType = 'todo' | 'done' | 'inProgress';