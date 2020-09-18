import * as React from "react";
import { List, Datagrid, TextField, ArrayField, BooleanField,ShowView } from 'react-admin';

export const PostList = (props) => (
    <ShowView {...props}>
        <ArrayField source="data">
            <Datagrid>
            <TextField source="phone" />
                <TextField source="phone" />
                <BooleanField source="isPremium"/>
            </Datagrid>
        </ArrayField>
    </ShowView>
    
);