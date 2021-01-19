import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SavedButton = ({id}) => {
  const saved = useSelector((state) => state.saved.saved);
  const dispatch = useDispatch();

  const fav = saved.includes(id);

  const addFav = (id) => {
    console.log('added');
    dispatch({
      type: 'ADD_LIKE',
      payload: id,
    });
  };
  const removeFav = (id) => {
    console.log('removed');
    dispatch({
      type: 'REMOVE_LIKE',
      payload: id,
    });
  };

  if (!fav) {
    return (
      <TouchableOpacity style={styles.favTouchable} onPress={() => addFav(id)}>
        {/* <Icon type="antdesign" name="staro" color="coral" size={21} /> */}
        <Text>Not Favourite</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.favTouchable}
        onPress={() => removeFav(id)}>
        <Text>Favourite</Text>
        {/* <Icon type="antdesign" name="star" color="coral" size={21} /> */}
      </TouchableOpacity>
    );
  }
};

SavedButton.propTypes = {
  id: PropTypes.number,
};

export default SavedButton;

const styles = StyleSheet.create({
  favTouchable: {
    flex: 1,
    alignItems: 'flex-start',
    // borderColor: '#fff',
    // borderWidth: 1,
    position: 'relative',
  },
});
