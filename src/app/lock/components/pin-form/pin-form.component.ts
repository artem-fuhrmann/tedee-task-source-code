import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PinForm } from '../../interfaces/pin-form.interface';
import { Subject, map, startWith, takeUntil } from 'rxjs';
import { PinGeneratorService } from '@shared/services/pin-generator.service';
import { PinValidator } from './validators/pin.validator';
import { PinFormValidator } from './validators/pin-form.validator';
import { Pin } from '@shared/interfaces/pin.interface';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PinFormComponent implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  private pinGeneratorService = inject(PinGeneratorService);
  private pinValidator = inject(PinValidator);
  private pinFormValidator = inject(PinFormValidator);

  @Input() initialData?: Pin;

  public pinForm!: FormGroup<PinForm>;

  @Output() valueChange = new EventEmitter<Pin>();
  @Output() formValidity = new EventEmitter<boolean>();

  private undestroy$: Subject<boolean> = new Subject();
    @ViewChild('startPicker') startPicker!: MatDatepicker<Date>;
    @ViewChild('endPicker') endPicker!: MatDatepicker<Date>;


  ngOnInit() {
    this._initPinForm();
    this._initFormValueObserver();
    this._initFormValidityObserver();
  }

  ngAfterViewInit() {
    // console.log(this.picker)

  }

  ngOnDestroy() {
    this.undestroy$.next(true);
    this.undestroy$.complete();
  }


  openStartDatepicker() {
    this.startPicker.open();
  }
  
  openEndDatepicker() {
    this.endPicker.open();
  }

  private _initPinForm() {
    this.pinForm = this.formBuilder.group(
      {
        alias: this.formBuilder.control(
          {
            value: this.initialData?.alias ?? '',
            disabled: !!this.initialData,
          },
          { validators: Validators.required }
        ),
        pin: this.formBuilder.control(
          {
            value: this.initialData?.pin ?? this.pinGeneratorService.generate(),
            disabled: !!this.initialData,
          },
          {
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6),
              this.pinValidator.validate(),
            ],
          }
        ),
        startDate: this.formBuilder.control<Date | null>({
          value: this.initialData?.startDate ?? null,
          disabled: !!this.initialData,
        }),
        endDate: this.formBuilder.control<Date | null>({
          value: this.initialData?.endDate ?? null,
          disabled: !!this.initialData,
        }),
      },
      { validators: this.pinFormValidator.validate() }
    );
  }

  private _initFormValueObserver() {
    this.pinForm.valueChanges
      .pipe(startWith(this.pinForm.value), takeUntil(this.undestroy$))
      .subscribe((data) => {
        this.valueChange.emit(data as Pin);
      });
  }

  private _initFormValidityObserver() {
    this.pinForm.statusChanges
      .pipe(
        startWith(this.pinForm.status),
        map((status) => status !== 'INVALID'),
        takeUntil(this.undestroy$)
      )
      .subscribe((status) => {
        this.formValidity.emit(status);
      });
  }
}
