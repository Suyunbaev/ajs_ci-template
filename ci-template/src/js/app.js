// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


export default function healthIndicator(user) {
    if (user.health >= 50) {
      return 'healthy';
    } if (user.health >= 15 && user.health < 50) {
      return 'wounded';
    }
    return 'critical';
  }