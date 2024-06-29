import { YMaps, Map, Placemark } from 'react-yandex-maps';

const api_key = '5bb92e78-afe4-43cf-82e1-10c2900e6cfa';

function Maps() {
  const defaultState = {
    center: [42.829022, 74.615496],
    zoom: 16,
  };
  return (
    <div className="map w-full h-full rounded-2xl">
      <YMaps query={{ apikey: api_key, load: 'package.full' }}>
        <Map defaultState={defaultState} state={defaultState}>
          <Placemark geometry={defaultState.center} />
        </Map>
      </YMaps>
    </div>
  );
}

export default Maps;
