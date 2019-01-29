var playlist = {
  'Linkin Park': 'Numb',
  'Eminem': 'Rap God'
};

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign(obj, { artistName: songTitle} );
}
