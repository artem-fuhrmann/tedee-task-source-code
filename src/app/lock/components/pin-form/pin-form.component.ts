import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinFormComponent implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);
  private pinGeneratorService = inject(PinGeneratorService);
  private pinValidator = inject(PinValidator);
  private pinFormValidator = inject(PinFormValidator);

  @Input() initialData?: Pin;

  public pinForm!: FormGroup<PinForm>;

  private _undestroy$: Subject<boolean> = new Subject();

  @Output() valueChange = new EventEmitter<Pin>();
  @Output() formValidity = new EventEmitter<boolean>();

  @ViewChild('startPicker') startPicker!: MatDatepicker<Date>;
  @ViewChild('endPicker') endPicker!: MatDatepicker<Date>;

  ngOnInit(): void {
    this._initPinForm();
    this._initFormValueObserver();
    this._initFormValidityObserver();
  }

  ngOnDestroy(): void {
    this._undestroy$.next(true);
    this._undestroy$.complete();
  }

  public openStartDatepicker(): void {
    this.startPicker.open();
  }

  public openEndDatepicker(): void {
    this.endPicker.open();
  }

  private _initPinForm(): void {
    this.pinForm = this.formBuilder.group(
      {
        alias: this.formBuilder.control(
          {
            value: this.initialData?.alias ?? '',
            disabled: !!this.initialData,
          },
          { validators: [Validators.required, Validators.maxLength(20)] }
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

  private _initFormValueObserver(): void {
    this.pinForm.valueChanges
      .pipe(startWith(this.pinForm.value), takeUntil(this._undestroy$))
      .subscribe((data) => {
        this.valueChange.emit(data as Pin);
      });
  }

  private _initFormValidityObserver(): void {
    this.pinForm.statusChanges
      .pipe(
        startWith(this.pinForm.status),
        map((status) => status !== 'INVALID'),
        takeUntil(this._undestroy$)
      )
      .subscribe((status) => {
        this.formValidity.emit(status);
      });
  }
}
