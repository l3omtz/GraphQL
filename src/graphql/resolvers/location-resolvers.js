import Location from '../../models/Locations';

export default {
     getLocation: () => Location.find({})
}