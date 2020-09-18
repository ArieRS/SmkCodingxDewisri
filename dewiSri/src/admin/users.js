import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="data[0].username" />
        </Datagrid>
    </List>
)