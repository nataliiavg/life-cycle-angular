import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit
{
	quantidade: number = 0;
	constructor() {}

	adicionar(){
		this.quantidade += 1;
	}

	decrementar(){
	this.quantidade -= 1;
}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}
	ngDoCheck(): void {
		console.log('ngDoCheck');
	}
	ngOnInit(): void {
		console.log('ngOnInit');
	}
}
