import React from 'react'
import {
  Item,
  Cover,
  Link,
  Container
} from './playlist.style'

export default function Playlist({
  data,
  handleTracks
}) {
  
  return (
    <Container>
      {
        data.map(item => (
          <Item key={item.id} >
            <Cover source={{ uri: item.images[0].url }} alt={item.name} />
            <Link onPress={event => handleTracks(event, item.tracks.href)}>{item.name}</Link>
          </Item>
        ))
      }
    </Container>
  )
}


/**
 * 
 * <List
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        renderItem={({item}) => <Item>{item}</Item>}
        renderSectionHeader={({section}) => <Header>{section.title}</Header>}
        keyExtractor={(item, index) => index}
      />
 */