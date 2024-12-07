import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import { ApiPersonasService, UsuarioRandom } from './api-personas.service';
/* cont */
describe('ApiPersonasService', () => {
  let service: ApiPersonasService;
  let httpMock: HttpTestingController;
/* simulatiiiing */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiPersonasService);
    httpMock = TestBed.inject(HttpTestingController);
  });/* tes proto */
/* truly */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería recuperar los datos de los usuarios de la API', () => {
    const mockData: UsuarioRandom = {
      results: [
        {
          gender: 'male',
          name: { title: 'Mr', first: 'John', last: 'Doe' },
          email: 'john.doe@example.com',
          picture: {
            large: 'image.jpg',
            medium: '',
            thumbnail: ''
          },
          location: {
            city: 'New York', country: 'USA',
            _street: undefined,
            get street() {
              return this['street'];
            },
            set street(value) {
              this['street'] = value;
            },
            state: '',
            postcode: 0,
            _coordinates: undefined,
            get coordinates() {
              return this.coordinates;
            },
            set coordinates(value) {
              this.coordinates = value;
            },
            _timezone: undefined,
            get timezone() {
              return this.timezone;
            },
            set timezone(value) {
              this.timezone = value;
            },
          },
          dob: { date: '1990-01-01', age: 34 },
          phone: '123456789',
          cell: '987654321',
          id: { name: 'ID1', value: '123456' },
          nat: 'US',
          _login: undefined,
          get login() {
            return this['login'];
          },
          set login(value) {
            this['login'] = value;
          },
          _registered: undefined,
          get registered() {
            return this['registered'];
          },
          set registered(value) {
            this['registered'] = value;
          },
        },
      ],
      info: { seed: 'abc123', results: 1, page: 1, version: '1.0' },
    };

    service.obtenerDatosPersonas().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('https://randomuser.me/api');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);

    httpMock.verify();
  });
  
});
