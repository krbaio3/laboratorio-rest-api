import * as React from 'react';
import * as classes from './character-card.styles';

import Avatar from '@material-ui/core/Avatar/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onDetails: (id: string) => void;
}

export const HotelCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete, onDetails } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.status}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.gender}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDetails(String(character.id))}>
          <DetailsIcon />
        </IconButton>
        <IconButton onClick={() => onEdit(String(character.id))}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(String(character.id))}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
