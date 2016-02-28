import moment from 'moment';

export default function(obj) {
  const time = moment(obj.query.iso);
  const valid = time.isValid();
  const hour = time.hour();
  const min = time.minute();
  const sec = time.second();

  if (!valid)
    return 'Invalid ISO-format';

  return {
    hour: hour,
    minute: min,
    second: sec,
  };
}
