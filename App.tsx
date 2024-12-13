import { Text, View } from 'react-native';
import { AppStyles } from './AppStyles';
import React, { useEffect, useState } from 'react';
import { instertItem, SelectItem, selectItems } from './src/db/itemsTable.querys';
import * as SQLite from 'expo-sqlite';
import { drizzle } from "drizzle-orm/expo-sqlite";
import migrations from './drizzle/migrations';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { itemsTable } from './src/db';

const expo = SQLite.openDatabaseSync(process.env.EXPO_PUBLIC_DB_FILE_NAME)
export const db = drizzle(expo)

export default function App() {
  const {success,error} = useMigrations(db,migrations)
  const [items, setItems] = useState<SelectItem>();
  const retrieveInsertResult = async () => {
    try {
      await db.delete(itemsTable)
      await instertItem({ name: "papas", description: "Papas fritas Lays", cost: 100, price: 200 });
      const items = await selectItems();
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!success) return;
    retrieveInsertResult();
  }, [success]);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  if (items) {
    return (
      <View style={AppStyles.container}>
        <Text style={AppStyles.redColor}>
          {items[0].name}
        </Text>
      </View>
    )
  } else {
    return (
      <View style={AppStyles.container}>
        <Text>`Empty`</Text>
      </View>
    );
  }
}
