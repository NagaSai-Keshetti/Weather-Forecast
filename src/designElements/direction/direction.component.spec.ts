import { DirectionComponent } from './direction.component';

describe('DirectionComponent', () => {
  let component: DirectionComponent;

  beforeEach(() => {
    component = new DirectionComponent();
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correct the given angle by -50 degrees', () => {
    component.angle = 100;
    component.ngOnInit();
    expect(component.angle).toEqual(50);
    expect(component.styles).toEqual('transform: rotate(50deg);');
  })
});
