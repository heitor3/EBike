import { Box } from 'native-base';
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { DetailBackground } from '../../atomic/atoms/DetailBackground';
import { Card } from '../../atomic/molecules/Card';
import { MainBanner } from '../../atomic/molecules/MainBanner';
import api from '../../services/api';
import { Header } from '../../atomic/molecules/Header';
import { CategoryList } from '../../atomic/organism/CategoryList';

export type CardProps = {
  title: string;
  price: number;
  model: string;
  image: string;
  id: string;
}

export function Home() {
  const [equipments, setEquipments] = useState<CardProps[]>([])

  useEffect(() => {
    async function getEquipments() {
      try {
        const { data } = await api.get("/equipments")

        console.log(data)

        setEquipments(data)

      } catch (err) {
        console.log(err)
      }
    }

    getEquipments();
  }, [])

  return (
    <Box flex="1" padding="20px" pt="-10px" position="relative">
      <DetailBackground />

      <FlatList
        ListHeaderComponent={() =>
          <>
            <Header text='Escolha sua Bike' />
            <MainBanner />
            <CategoryList />
          </>
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={equipments}
        keyExtractor={item => item.id}
        renderItem={({ item: equipment }) =>
          <Card
            image={equipment.image}
            key={equipment.id}
            id={equipment.id}
            model={equipment.model}
            price={equipment.price}
            title={equipment.title}
          />
        }
      />
    </Box>
  )
}
