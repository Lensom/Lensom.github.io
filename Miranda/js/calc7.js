function calculate(){

var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;


	if ($('#amount').val() == 0 || $('#cost').val() == 0)
	return false;
	
	//$('#amount,#cost').bind('keyup', function(){
	//this.value = $(this).val().replace(',', '.');
	//})

//Если бензиновый
if ($('#dv-1').attr('checked')){

	a = $('#amount').val();
	b = $('#cost').val();
	
	if (isNaN(a)||isNaN(b))
	return false;
	
	if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();
	
	//c = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#a-1').html(cbo+' грн.');
	$('#a-2').html('10%');
	$('#a-3').html(cbo2+' грн.');
	
	if (a <= 1000){
		a2 = 0.102;
	};
	if (a > 1000 && a <= 1500){
		a2 = 0.063;
	};
	if (a > 1500 && a <= 2200){
		a2 = 0.267;
	};
	if (a > 2200 && a <= 3000){
		a2 = 0.276;
	};
	if (a > 3000){
		a2 = 2.209;
	};
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#b-1').html(a + ' см3');
	$('#b-2').html(a2 + ' EUR');
	$('#b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#c-1').html(cbocbo2 + ' грн.')
	$('#c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};
	
//Если дизельный
if ($('#dv-2').attr('checked')){

	a = $('#amount').val();
	b = $('#cost').val();
	
	if (isNaN(a)||isNaN(b))
	return false;
	
	if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();
	
	//c = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#a-1').html(cbo+' грн.');
	$('#a-2').html('10%');
	$('#a-3').html(cbo2+' грн.');
	
	if (a <= 1500){
		a2 = 0.103;
	};
	if (a > 1500 && a <= 2500){
		a2 = 0.327;
	};
	if (a > 2500){
		a2 = 2.209;
	};
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#b-1').html(a + ' см3');
	$('#b-2').html(a2 + ' EUR');
	$('#b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#c-1').html(cbocbo2 + ' грн.')
	$('#c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};

};


function calculate2(){
	
var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;

//Если легковой
if ($('#form-e #dv-1g').attr('checked')){
	
if ($('#form-e #costg').val() == 0)
return false;

b = $('#form-e #costg').val();

if (isNaN(b))
return false;

	if ($('#form-e #kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0).toFixed(2);
	
	$('#form-e #a-1').html(cbo+' грн.');
	$('#form-e #a-2').html('0%');
	$('#form-e #a-3').html(cbo2+' грн.');
	
	a2 = 109.129;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-e #b-1').html('1 шт.');
	$('#form-e #b-2').html(a2 + ' EUR');
	$('#form-e #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-e #c-1').html(cbocbo2 + ' грн.')
	$('#form-e #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-e #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-e #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-e #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
};

//Если грузовой и физ.лицо
if ($('#form-e #dv-2g').attr('checked') && $('#form-e #dv-1a').attr('checked')){
	
	if ($('#form-e #costg').val() == 0)
	return false;

	b = $('#form-e #costg').val();

	if (isNaN(b))
	return false;

	if ($('#form-e #kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-e #a-1').html(cbo+' грн.');
	$('#form-e #a-2').html('10%');
	$('#form-e #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-e #b-1').html('0%');
	$('#form-e #b-2').html(a2 + ' EUR');
	$('#form-e #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-e #c-1').html(cbocbo2 + ' грн.')
	$('#form-e #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-e #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-e #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-e #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
};

//Если грузовой, юр.лицо и нет EUR.1 (то же, что и выше)
if ($('#form-e #dv-2g').attr('checked') && $('#form-e #dv-1b').attr('checked')){
	
	if ($('#form-e #costg').val() == 0)
	return false;

	b = $('#form-e #costg').val();

	if (isNaN(b))
	return false;

	if ($('#form-e #kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-e #a-1').html(cbo+' грн.');
	$('#form-e #a-2').html('10%');
	$('#form-e #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-e #b-1').html('0%');
	$('#form-e #b-2').html(a2 + ' EUR');
	$('#form-e #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-e #c-1').html(cbocbo2 + ' грн.')
	$('#form-e #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-e #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-e #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-e #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
};

//Если грузовой, юр.лицо и есть EUR.1
if ($('#form-e #dv-2g').attr('checked') && $('#form-e #dv-2b').attr('checked')){
	
	if ($('#form-e #costg').val() == 0)
	return false;

	b = $('#form-e #costg').val();

	if (isNaN(b))
	return false;

	if ($('#form-e #kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#form-e #kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-e #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.075).toFixed(2);
	
	$('#form-e #a-1').html(cbo+' грн.');
	$('#form-e #a-2').html('7.5%');
	$('#form-e #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-e #b-1').html('0%');
	$('#form-e #b-2').html(a2 + ' EUR');
	$('#form-e #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-e #c-1').html(cbocbo2 + ' грн.')
	$('#form-e #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-e #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-e #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-e #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
}

};

function calculate3(){
var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;
var d = 0;
var d2 = 0;

//Если физ.лицо или нет EUR.1
if ($('#form-m #dv-1ad').attr('checked') || $('#form-m #dv-1bd').attr('checked')){
		
if ($('#form-m #costd').val() == 0)
return false;


a = $('#form-m #amountd').val();
b = $('#form-m #costd').val();

if (isNaN(b))
return false;

if ($('#form-m #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-m #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-m #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

c2 = $('#kurs').val();



	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-m #a-1').html(cbo+' грн.');
	$('#form-m #a-2').html('10%');
	$('#form-m #a-3').html(cbo2+' грн.');
	
	if (a <= 50){
		a2 = 0.062;
	};
	if (a > 50 && a <= 125){
		a2 = 0.062;
	};
	if (a > 125 && a <= 500){
		a2 = 0.062;
	};
	if (a > 500 && a <= 800){
		a2 = 0.443;
	};
	if (a > 800){
		a2 = 0.447;
	};
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-m #b-1').html(a + ' см3');
	$('#form-m #b-2').html(a2 + ' EUR');
	$('#form-m #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-m #c-1').html(cbocbo2 + ' грн.')
	$('#form-m #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-m #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-m #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-m #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
		
	};
	
	
	
	//Если есть сертификат EUR.1
	if ($('#form-m #dv-2bd').attr('checked')){
		
if ($('#form-m #costd').val() == 0)
return false;


a = $('#form-m #amountd').val();
b = $('#form-m #costd').val();

if (isNaN(b))
return false;

if ($('#form-m #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-m #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-m #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-m #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

c2 = $('#kurs').val();
		
	if (a <= 50){
		a2 = 0.062;
		d = 0.05;
		d2 = '5%';
	};
	if (a > 50 && a <= 125){
		a2 = 0.062;
		d = 0.067;
		d2 = '6.7%';
	};
	if (a > 125 && a <= 500){
		a2 = 0.062;
		d = 0.05;
		d2 = '5%';
	};
	if (a > 500){
		a2 = 0.443;
		d = 0.05;
		d2 = '5%';
	};

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * d).toFixed(2);
	
	$('#form-m #a-1').html(cbo+' грн.');
	$('#form-m #a-2').html(d2);
	$('#form-m #a-3').html(cbo2+' грн.');
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	$('#form-m #b-1').html(a + ' см3');
	$('#form-m #b-2').html(a2 + ' EUR');
	$('#form-m #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-m #c-1').html(cbocbo2 + ' грн.')
	$('#form-m #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-m #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-m #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-m #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
		
		
		
	};
	
};

function calculate4(){
var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;
var d = 0;
var d2 = 0;

//Если новый
if ($('#form-t #dv-1gt').attr('checked')){
	
	//Если юр.лицо
	if ($('#form-t #dv-2at').attr('checked')){
		
		
if ($('#form-t #costgt').val() == 0)
return false;


//a = $('#form-m #amountd').val();
b = $('#form-t #costgt').val();

if (isNaN(b))
return false;

if ($('#form-t #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0).toFixed(2);
	
	$('#form-t #a-1').html(cbo+' грн.');
	$('#form-t #a-2').html('0%');
	$('#form-t #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-t #b-1').html('0%');
	$('#form-t #b-2').html(a2 + ' EUR');
	$('#form-t #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-t #c-1').html(cbocbo2 + ' грн.')
	$('#form-t #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-t #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-t #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-t #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');

		
	};
	
	
		//Если физ.лицо
if ($('#form-t #dv-1at').attr('checked')){
		
		
if ($('#form-t #costgt').val() == 0)
return false;


//a = $('#form-m #amountd').val();
b = $('#form-t #costgt').val();

if (isNaN(b))
return false;

if ($('#form-t #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-t #a-1').html(cbo+' грн.');
	$('#form-t #a-2').html('10%');
	$('#form-t #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-t #b-1').html('0%');
	$('#form-t #b-2').html(a2 + ' EUR');
	$('#form-t #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-t #c-1').html(cbocbo2 + ' грн.')
	$('#form-t #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-t #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-t #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-t #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');

		
	};
		
};
	
	
//Если б/у
if ($('#form-t #dv-2gt').attr('checked')){
	
		
		//Если физ.лицо
if ($('#form-t #dv-1at').attr('checked')){

if ($('#form-t #costgt').val() == 0)
return false;


//a = $('#form-m #amountd').val();
b = $('#form-t #costgt').val();

if (isNaN(b))
return false;

if ($('#form-t #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-t #a-1').html(cbo+' грн.');
	$('#form-t #a-2').html('10%');
	$('#form-t #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-t #b-1').html('0%');
	$('#form-t #b-2').html(a2 + ' EUR');
	$('#form-t #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-t #c-1').html(cbocbo2 + ' грн.')
	$('#form-t #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-t #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-t #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-t #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
		
	};
	
	//Если юр.лицо с EUR.1
	if ($('#form-t #dv-2at').attr('checked') && $('#form-t #dv-2bt').attr('checked')){
		
		
		
		
if ($('#form-t #costgt').val() == 0)
return false;


//a = $('#form-m #amountd').val();
b = $('#form-t #costgt').val();

if (isNaN(b))
return false;

if ($('#form-t #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.05).toFixed(2);
	
	$('#form-t #a-1').html(cbo+' грн.');
	$('#form-t #a-2').html('5%');
	$('#form-t #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-t #b-1').html('0%');
	$('#form-t #b-2').html(a2 + ' EUR');
	$('#form-t #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-t #c-1').html(cbocbo2 + ' грн.')
	$('#form-t #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-t #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-t #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-t #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};
	
	//Если юр.лицо без EUR.1
	if ($('#form-t #dv-2at').attr('checked') && $('#form-t #dv-1bt').attr('checked')){
		
		
		
		
if ($('#form-t #costgt').val() == 0)
return false;


//a = $('#form-m #amountd').val();
b = $('#form-t #costgt').val();

if (isNaN(b))
return false;

if ($('#form-t #kurs-EUR').attr('selected')){
	c = $('#kurs').val();
	cur = 'EUR';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-USD').attr('selected')){
	c = $('#kurs2').val();
	cur = 'USD';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};

if ($('#form-t #kurs-PLN').attr('selected')){
	c = $('#kurs3').val();
	cur = 'PLN';
	$('#form-t #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};
	
	c2 = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-t #a-1').html(cbo+' грн.');
	$('#form-t #a-2').html('10%');
	$('#form-t #a-3').html(cbo2+' грн.');
	
	a2 = 0;
	
	aa2o = (a2 * c2).toFixed(2);
	
	$('#form-t #b-1').html('0%');
	$('#form-t #b-2').html(a2 + ' EUR');
	$('#form-t #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-t #c-1').html(cbocbo2 + ' грн.')
	$('#form-t #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-t #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-t #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-t #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};
	
	
};


};


function calculate5(){
var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;
var d = 0;
var d2 = 0;

// Если физ.лицо
if ($('#form-l #dv-1al').attr('checked')){
	
	//
	if ($('#amountl').val() == 0 || $('#costl').val() == 0)
	return false;

//Если бензиновый
if ($('#dv-1cl').attr('checked')){

	a = $('#amountl').val();
	b = $('#costl').val();
	
	if (isNaN(a)||isNaN(b))
	return false;
	
	if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();
	
	//c = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-l #a-1').html(cbo+' грн.');
	$('#form-l #a-2').html('10%');
	$('#form-l #a-3').html(cbo2+' грн.');
	
	if (a <= 1000){
		a2 = 0.102;
	};
	if (a > 1000 && a <= 1500){
		a2 = 0.063;
	};
	if (a > 1500 && a <= 2200){
		a2 = 0.267;
	};
	if (a > 2200 && a <= 3000){
		a2 = 0.276;
	};
	if (a > 3000){
		a2 = 2.209;
	};
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-l #b-1').html(a + ' см3');
	$('#form-l #b-2').html(a2 + ' EUR');
	$('#form-l #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-l #c-1').html(cbocbo2 + ' грн.')
	$('#form-l #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-l #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-l #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-l #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};
	
//Если дизельный
if ($('#dv-2cl').attr('checked')){

	a = $('#amountl').val();
	b = $('#costl').val();
	
	if (isNaN(a)||isNaN(b))
	return false;
	
	if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
	};
	
	c2 = $('#kurs').val();
	
	//c = $('#kurs').val();

	cb = c * b;
	cbo = (c * b).toFixed(2);
	cbo2 = (cbo * 0.1).toFixed(2);
	
	$('#form-l #a-1').html(cbo+' грн.');
	$('#form-l #a-2').html('10%');
	$('#form-l #a-3').html(cbo2+' грн.');
	
	if (a <= 1500){
		a2 = 0.103;
	};
	if (a > 1500 && a <= 2500){
		a2 = 0.327;
	};
	if (a > 2500){
		a2 = 2.209;
	};
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-l #b-1').html(a + ' см3');
	$('#form-l #b-2').html(a2 + ' EUR');
	$('#form-l #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-l #c-1').html(cbocbo2 + ' грн.')
	$('#form-l #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-l #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-l #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-l #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	};
	//
	
};
//


	
//Если юр.лицо
if ($('#form-l #dv-2al').attr('checked')){

if ($('#amountl').val() == 0 || $('#costl').val() == 0)
return false;

a = $('#amountl').val();
b = $('#costl').val();
	
if (isNaN(a)||isNaN(b))
return false;
	
if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
c2 = $('#kurs').val();

cb = c * b;
cbo = (c * b).toFixed(2);


	
	//Если новый
	if ($('#form-l #dv-1l').attr('checked')){
		
		//Есть сертификат
		if ($('#form-l #dv-2bl').attr('checked')){
			
			//Бензиновый
			if ($('#form-l #dv-1cl').attr('checked')){
				//alert(1);
				
				if (a <= 1000){
					a2 = 0.102;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-l #a-2').html('7.5%');
				};
				if (a > 1000 && a <= 1500){
					a2 = 0.063;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 1500 && a <= 2200){
					a2 = 0.267;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 2200 && a <= 3000){
					a2 = 0.276;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-l #a-2').html('7.5%');
				};
				if (a > 3000){
					a2 = 2.209;
					cbo2 = (cbo * 0.05).toFixed(2);
					$('#form-l #a-2').html('5%');
				};
				
			};
			
			//Дизельный
			if ($('#form-l #dv-2cl').attr('checked')){
				//alert(2);
	
				if (a <= 1500){
					a2 = 0.103;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 1500 && a <= 2500){
					a2 = 0.327;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 2500){
					a2 = 2.209;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-l #a-2').html('7.5%');
				};
				
			};
			
		};
		
		//Нет сертификата
		if ($('#form-l #dv-1bl').attr('checked')){
			
			//Бензиновый
			if ($('#form-l #dv-1cl').attr('checked')){
				//alert(3);
				
				if (a <= 1000){
					a2 = 0.102;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1000 && a <= 1500){
					a2 = 0.063;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1500 && a <= 2200){
					a2 = 0.267;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 2200 && a <= 3000){
					a2 = 0.276;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 3000){
					a2 = 2.209;
					cbo2 = (cbo * 0.05).toFixed(2);
					$('#form-l #a-2').html('5%');
				};
				
			};
			
			//Дизельный
			if ($('#form-l #dv-2cl').attr('checked')){
				//alert(4);
	
				if (a <= 1500){
					a2 = 0.103;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1500 && a <= 2500){
					a2 = 0.327;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 2500){
					a2 = 2.209;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				
			};
			
		};
	};
	
	//Если б/у
	if ($('#form-l #dv-2l').attr('checked')){
		
		//Есть сертификат
		if ($('#form-l #dv-2bl').attr('checked')){
			
			//Бензиновый
			if ($('#form-l #dv-1cl').attr('checked')){
				//alert(5);
				
				if (a <= 1000){
					a2 = 0.102;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 1000 && a <= 1500){
					a2 = 0.063;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 1500 && a <= 2200){
					a2 = 0.267;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 2200 && a <= 3000){
					a2 = 0.276;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 3000){
					a2 = 2.209;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				
			};
			
			//Дизельный
			if ($('#form-l #dv-2cl').attr('checked')){
				//alert(6);
	
				if (a <= 1500){
					a2 = 0.103;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 1500 && a <= 2500){
					a2 = 0.327;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				if (a > 2500){
					a2 = 2.209;
					cbo2 = (cbo * 0.082).toFixed(2);
					$('#form-l #a-2').html('8.2%');
				};
				
			};
			
		};
		
		//Нет сертификата
		if ($('#form-l #dv-1bl').attr('checked')){
			
			//Бензиновый
			if ($('#form-l #dv-1cl').attr('checked')){
				//alert(7);
				
				if (a <= 1000){
					a2 = 0.102;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1000 && a <= 1500){
					a2 = 0.063;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1500 && a <= 2200){
					a2 = 0.267;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 2200 && a <= 3000){
					a2 = 0.276;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 3000){
					a2 = 2.209;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				
			};
			
			//Дизельный
			if ($('#form-l #dv-2cl').attr('checked')){
				//alert(8);
	
				if (a <= 1500){
					a2 = 0.103;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 1500 && a <= 2500){
					a2 = 0.327;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				if (a > 2500){
					a2 = 2.209;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-l #a-2').html('10%');
				};
				
			};
			
		};
	};
	

				
	$('#form-l #a-1').html(cbo+' грн.');
	$('#form-l #a-3').html(cbo2+' грн.');
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-l #b-1').html(a + ' см3');
	$('#form-l #b-2').html(a2 + ' EUR');
	$('#form-l #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-l #c-1').html(cbocbo2 + ' грн.')
	$('#form-l #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-l #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-l #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-l #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	
	
};
//

};

//
function calculate6(){
var a = 0;
var b = 0;
var c = 0;
var cb = 0;
var cbo = 0;
var cbo2 = 0;
var a2 = 0;
var aa2o = 0;
var cbocbo2 = 0;
var cbocbo22 = 0;
var sum = 0;
var sum2 = 0;
var c2 = 0;
var cur = 0;
var d = 0;
var d2 = 0;

// Если физ.лицо
if ($('#form-g2 #dv-1ag2').attr('checked')){
	//alert(1);
if ($('#amountg2').val() == 0 || $('#costg2').val() == 0)
return false;

a = $('#amountg2').val();
b = $('#costg2').val();
	
if (isNaN(a)||isNaN(b))
return false;
	
if ($('#form-g2 #kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-g2 #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#form-g2 #kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-g2 #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#form-g2 #kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-g2 #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
c2 = $('#kurs').val();

cb = c * b;
cbo = (c * b).toFixed(2);
	// Если бензин
	if ($('#form-g2 #dv-1cg2').attr('checked')){
		//Если новый
		if ($('#form-g2 #dv-1g2').attr('checked')){
			//Если до 5 тонн
			if ($('#5t').attr('selected')){
				//alert(1);
				a2 = 0.01;
				cbo2 = (cbo * 0.1).toFixed(2);
				$('#form-g2 #a-2').html('10%');
			};	
			//
			//Если больше 5 тонн
			if ($('#520t').attr('selected') || $('#20t').attr('selected')){
				//alert(2);
				a2 = 0.013;
				cbo2 = (cbo * 0.1).toFixed(2);
				$('#form-g2 #a-2').html('10%');
			};	
			//
		};
		//
		//Если б/у
		if ($('#form-g2 #dv-2g2').attr('checked')){
			//Если до 5 лет
			if ($('#5e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(3);
					a2 = 0.02;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если больше 5 тонн
				if ($('#520t').attr('selected') || $('#20t').attr('selected')){
					//alert(4);
					a2 = 0.026;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
			//Если 5-8 лет
			if ($('#58e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(5);
					a2 = 0.8;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если больше 5 тонн
				if ($('#520t').attr('selected') || $('#20t').attr('selected')){
					//alert(6);
					a2 = 1.04;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};
				//
			};
			//
			//Если более 8 лет
			if ($('#8e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(7);
					a2 = 1;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если больше 5 тонн
				if ($('#520t').attr('selected') || $('#20t').attr('selected')){
					//alert(8);
					a2 = 1.3;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};
				//
			};
			//
		};
		//
	};
	//
	// Если дизель
	if ($('#form-g2 #dv-2cg2').attr('checked')){
		//Если новый
		if ($('#form-g2 #dv-1g2').attr('checked')){
			//Если до 5 тонн
			if ($('#5t').attr('selected')){
				//alert(1);
				a2 = 0.01;
				cbo2 = (cbo * 0.1).toFixed(2);
				$('#form-g2 #a-2').html('10%');
			};	
			//
			//Если  5-20 тонн
			if ($('#520t').attr('selected')){
				//alert(2);
				a2 = 0.013;
				cbo2 = (cbo * 0.1).toFixed(2);
				$('#form-g2 #a-2').html('10%');
			};	
			//
			//Если более 20 тонн
			if ($('#20t').attr('selected')){
				//alert(3);
				a2 = 0.016;
				cbo2 = (cbo * 0.1).toFixed(2);
				$('#form-g2 #a-2').html('10%');
			};	
			//
		};
		//
		//Если б/у
		if ($('#form-g2 #dv-2g2').attr('checked')){
			//Если до 5 лет
			if ($('#5e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(4);
					a2 = 0.02;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если  5-20 тонн
				if ($('#520t').attr('selected')){
					//alert(5);
					a2 = 0.026;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если более 20 тонн
				if ($('#20t').attr('selected')){
					//alert(6);
					a2 = 0.033;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
			//Если 5-8 лет
			if ($('#58e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(7);
					a2 = 0.8;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если  5-20 тонн
				if ($('#520t').attr('selected')){
					//alert(8);
					a2 = 1.04;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если более 20 тонн
				if ($('#20t').attr('selected')){
					//alert(9);
					a2 = 1.32;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
			//Если более 8 лет
			if ($('#8e').attr('selected')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(10);
					a2 = 1;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если  5-20 тонн
				if ($('#520t').attr('selected')){
					//alert(11);
					a2 = 1.3;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если более 20 тонн
				if ($('#20t').attr('selected')){
					//alert(12);
					a2 = 1.65;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
		};
		//
	};
	//
	

	//		
	$('#form-g2 #a-1').html(cbo+' грн.');
	$('#form-g2 #a-3').html(cbo2+' грн.');
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-g2 #b-1').html(a + ' см3');
	$('#form-g2 #b-2').html(a2 + ' EUR');
	$('#form-g2 #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-g2 #c-1').html(cbocbo2 + ' грн.')
	$('#form-g2 #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-g2 #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-g2 #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-g2 #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	//
	
};
// Если юр.лицо
if ($('#form-g2 #dv-2ag2').attr('checked')){
	//alert(2);
if ($('#amountg2').val() == 0 || $('#costg2').val() == 0)
return false;

a = $('#amountg2').val();
b = $('#costg2').val();
	
if (isNaN(a)||isNaN(b))
return false;
	
if ($('#kurs-EUR').attr('selected')){
		c = $('#kurs').val();
		cur = 'EUR';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#kurs-USD').attr('selected')){
		c = $('#kurs2').val();
		cur = 'USD';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
if ($('#kurs-PLN').attr('selected')){
		c = $('#kurs3').val();
		cur = 'PLN';
		$('#form-l #cur').html('В расчёте использовался текущий курс НБУ - 1 '+cur+' = '+c+' грн. (НБУ)');
};	
c2 = $('#kurs').val();

cb = c * b;
cbo = (c * b).toFixed(2);
	// Нет сертификата
	if ($('#form-g2 #dv-1bg2').attr('checked')){
		// Если бензин
		if ($('#form-g2 #dv-1cg2').attr('checked')){
			
			//Если новый
			if ($('#form-g2 #dv-1g2').attr('checked')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(1);
					a2 = 0.01;
					cbo2 = (cbo * 0.05).toFixed(2);
					$('#form-g2 #a-2').html('5%');
				};	
				//
				//Если больше 5 тонн
				if ($('#520t').attr('selected') || $('#20t').attr('selected')){
					//alert(2);
					a2 = 0.013;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
			//Если б/у
			if ($('#form-g2 #dv-2g2').attr('checked')){
				//Если до 5 лет
				if ($('#5e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(3);
						a2 = 0.02;
						cbo2 = (cbo * 0.05).toFixed(2);
						$('#form-g2 #a-2').html('5%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(4);
						a2 = 0.026;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
				};
				//
				//Если 5-8 лет
				if ($('#58e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(5);
						a2 = 0.8;
						cbo2 = (cbo * 0.05).toFixed(2);
						$('#form-g2 #a-2').html('5%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(6);
						a2 = 1.04;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};
					//
				};
				//
				//Если более 8 лет
				if ($('#8e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(7);
						a2 = 1;
						cbo2 = (cbo * 0.05).toFixed(2);
						$('#form-g2 #a-2').html('5%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(8);
						a2 = 1.3;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};
					//
				};
				//
			};
			//
			
		};
		//
		// Если дизель
		if ($('#form-g2 #dv-2cg2').attr('checked')){
			//Если новый
			if ($('#form-g2 #dv-1g2').attr('checked')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(1);
					a2 = 0.01;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если  5-20 тонн
				if ($('#520t').attr('selected')){
					//alert(2);
					a2 = 0.013;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
				//Если более 20 тонн
				if ($('#20t').attr('selected')){
					//alert(3);
					a2 = 0.016;
					cbo2 = (cbo * 0.1).toFixed(2);
					$('#form-g2 #a-2').html('10%');
				};	
				//
			};
			//
			//Если б/у
			if ($('#form-g2 #dv-2g2').attr('checked')){
				//Если до 5 лет
				if ($('#5e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(4);
						a2 = 0.02;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(5);
						a2 = 0.026;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(6);
						a2 = 0.033;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
				};
				//
				//Если 5-8 лет
				if ($('#58e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(7);
						a2 = 0.8;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(8);
						a2 = 1.04;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(9);
						a2 = 1.32;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
				};
				//
				//Если более 8 лет
				if ($('#8e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(10);
						a2 = 1;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(11);
						a2 = 1.3;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(12);
						a2 = 1.65;
						cbo2 = (cbo * 0.1).toFixed(2);
						$('#form-g2 #a-2').html('10%');
					};	
					//
				};
				//
			};
			//
		};
		//
	};
	//
	// Есть сертификат
	if ($('#form-g2 #dv-2bg2').attr('checked')){
		// Если бензин
		if ($('#form-g2 #dv-1cg2').attr('checked')){
			
			//Если новый
			if ($('#form-g2 #dv-1g2').attr('checked')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(1);
					a2 = 0.01;
					cbo2 = (cbo * 0.038).toFixed(2);
					$('#form-g2 #a-2').html('3,8%');
				};	
				//
				//Если больше 5 тонн
				if ($('#520t').attr('selected') || $('#20t').attr('selected')){
					//alert(2);
					a2 = 0.013;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-g2 #a-2').html('7,5%');
				};	
				//
			};
			//
			//Если б/у
			if ($('#form-g2 #dv-2g2').attr('checked')){
				//Если до 5 лет
				if ($('#5e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(3);
						a2 = 0.02;
						cbo2 = (cbo * 0.038).toFixed(2);
						$('#form-g2 #a-2').html('3,8%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(4);
						a2 = 0.026;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
				};
				//
				//Если 5-8 лет
				if ($('#58e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(5);
						a2 = 0.8;
						cbo2 = (cbo * 0.038).toFixed(2);
						$('#form-g2 #a-2').html('3,8%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(6);
						a2 = 1.04;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};
					//
				};
				//
				//Если более 8 лет
				if ($('#8e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(7);
						a2 = 1;
						cbo2 = (cbo * 0.038).toFixed(2);
						$('#form-g2 #a-2').html('3,8%');
					};	
					//
					//Если больше 5 тонн
					if ($('#520t').attr('selected') || $('#20t').attr('selected')){
						//alert(8);
						a2 = 1.3;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};
					//
				};
				//
			};
			//
			
		};
		//
		// Если дизель
		if ($('#form-g2 #dv-2cg2').attr('checked')){
			//Если новый
			if ($('#form-g2 #dv-1g2').attr('checked')){
				//Если до 5 тонн
				if ($('#5t').attr('selected')){
					//alert(1);
					a2 = 0.01;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-g2 #a-2').html('7,5%');
				};	
				//
				//Если  5-20 тонн
				if ($('#520t').attr('selected')){
					//alert(2);
					a2 = 0.013;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-g2 #a-2').html('7,5%');
				};	
				//
				//Если более 20 тонн
				if ($('#20t').attr('selected')){
					//alert(3);
					a2 = 0.016;
					cbo2 = (cbo * 0.075).toFixed(2);
					$('#form-g2 #a-2').html('7,5%');
				};	
				//
			};
			//
			//Если б/у
			if ($('#form-g2 #dv-2g2').attr('checked')){
				//Если до 5 лет
				if ($('#5e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(4);
						a2 = 0.02;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(5);
						a2 = 0.026;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(6);
						a2 = 0.033;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
				};
				//
				//Если 5-8 лет
				if ($('#58e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(7);
						a2 = 0.8;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(8);
						a2 = 1.04;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(9);
						a2 = 1.32;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
				};
				//
				//Если более 8 лет
				if ($('#8e').attr('selected')){
					//Если до 5 тонн
					if ($('#5t').attr('selected')){
						//alert(10);
						a2 = 1;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если  5-20 тонн
					if ($('#520t').attr('selected')){
						//alert(11);
						a2 = 1.3;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
					//Если более 20 тонн
					if ($('#20t').attr('selected')){
						//alert(12);
						a2 = 1.65;
						cbo2 = (cbo * 0.075).toFixed(2);
						$('#form-g2 #a-2').html('7,5%');
					};	
					//
				};
				//
			};
			//
		};
		//
		
	};
	//
	

	//		
	$('#form-g2 #a-1').html(cbo+' грн.');
	$('#form-g2 #a-3').html(cbo2+' грн.');
	
	
	aa2o = (a * a2 * c2).toFixed(2);
	
	
	$('#form-g2 #b-1').html(a + ' см3');
	$('#form-g2 #b-2').html(a2 + ' EUR');
	$('#form-g2 #b-3').html(aa2o + ' грн.');
	
	cbocbo2 = (parseFloat(cbo) + parseFloat(cbo2) + parseFloat(aa2o)).toFixed(2);
	
	$('#form-g2 #c-1').html(cbocbo2 + ' грн.')
	$('#form-g2 #c-2').html('20%');
	
	cbocbo22 = cbocbo2 * 0.2;
	
	$('#form-g2 #c-3').html((cbocbo22).toFixed(2) + ' грн.')
	
	sum = (parseFloat(cbo2) + parseFloat(aa2o) + parseFloat(cbocbo22)).toFixed(2);
	$('#form-g2 #d-1').html(sum + ' грн.');
	
	sum2 = sum / c;
	$('#form-g2 #d-2').html('Итого, на таможню нужно заплатить <span>' + sum2.toFixed(2) + ' ' + cur +'</span> по курсу НБУ на день оформления');
	//
};

};
//

$(document).ready(function(){
	
	
	//Клики по радиоточкам
	$('#form-e #dv-1g, #form-e #dv-2g').change(function(){
		if ($('#form-e #dv-2g').attr('checked')){
			$('#form-e .block-1a').removeClass('disabled');
			$('#form-e .block-1a #dv-1a').removeAttr('disabled');
			$('#form-e .block-1a #dv-1a').attr('checked','checked');
			$('#form-e .block-1a #dv-2a').removeAttr('disabled');
		} else {
			$('#form-e .block-1a').addClass('disabled');
			$('#form-e .block-1a #dv-1a').attr('disabled','disabled');
			$('#form-e .block-1a #dv-1a').removeAttr('checked');
			$('#form-e .block-1a #dv-2a').attr('disabled','disabled');
			$('#form-e .block-1a #dv-2a').removeAttr('checked');
			$('#form-e .block-1b').addClass('disabled');
			$('#form-e .block-1b #dv-1b').attr('disabled','disabled');
			$('#form-e .block-1b #dv-1b').removeAttr('checked');
			$('#form-e .block-1b #dv-2b').attr('disabled','disabled');
			$('#form-e .block-1b #dv-2b').removeAttr('checked');
		}
	});
	
	$('#form-e #dv-1a, #form-e #dv-2a').change(function(){
		if ($('#form-e #dv-2a').attr('checked')){
			$('#form-e .block-1b').removeClass('disabled');
			$('#form-e .block-1b #dv-1b').removeAttr('disabled');
			$('#form-e .block-1b #dv-1b').attr('checked','checked');
			$('#form-e .block-1b #dv-2b').removeAttr('disabled');
		} else {
			$('#form-e .block-1b').addClass('disabled');
			$('#form-e .block-1b #dv-1b').attr('disabled','disabled');
			$('#form-e .block-1b #dv-1b').removeAttr('checked');
			$('#form-e .block-1b #dv-2b').attr('disabled','disabled');
			$('#form-e .block-1b #dv-2b').removeAttr('checked');
		}
	});
	
	$('#form-m #dv-1ad, #form-m #dv-2ad').change(function(){
	if ($('#form-m #dv-2ad').attr('checked')){
			$('#form-m .block-1b').removeClass('disabled');
			$('#form-m .block-1b #dv-1bd').removeAttr('disabled');
			$('#form-m .block-1b #dv-1bd').attr('checked','checked');
			$('#form-m .block-1b #dv-2bd').removeAttr('disabled');
	} else {
			$('#form-m .block-1b').addClass('disabled');
			$('#form-m .block-1b #dv-1bd').attr('disabled','disabled');
			$('#form-m .block-1b #dv-1bd').removeAttr('checked');
			$('#form-m .block-1b #dv-2bd').attr('disabled','disabled');
			$('#form-m .block-1b #dv-2bd').removeAttr('checked');
	}
	});
	
	$('#form-t #dv-1gt, #form-t #dv-2gt, #form-t #dv-1at, #form-t #dv-2at').change(function(){
	if ($('#form-t #dv-2gt').attr('checked') && $('#form-t #dv-2at').attr('checked')){
			$('#form-t .block-1b').removeClass('disabled');
			$('#form-t .block-1b #dv-1bt').removeAttr('disabled');
			$('#form-t .block-1b #dv-1bt').attr('checked','checked');
			$('#form-t .block-1b #dv-2bt').removeAttr('disabled');
	} else {
			$('#form-t .block-1b').addClass('disabled');
			$('#form-t .block-1b #dv-1bt').attr('disabled','disabled');
			$('#form-t .block-1b #dv-1bt').removeAttr('checked');
			$('#form-t .block-1b #dv-2bt').attr('disabled','disabled');
			$('#form-t .block-1b #dv-2bt').removeAttr('checked');
	}
	});
	
	$('#form-l #dv-1al, #form-l #dv-2al').change(function(){
	if ($('#form-l #dv-2al').attr('checked')){
			$('#form-l .block-1b').removeClass('disabled');
			$('#form-l .block-1b #dv-1bl').removeAttr('disabled');
			$('#form-l .block-1b #dv-1bl').attr('checked','checked');
			$('#form-l .block-1b #dv-2bl').removeAttr('disabled');
	} else {
			$('#form-l .block-1b').addClass('disabled');
			$('#form-l .block-1b #dv-1bl').attr('disabled','disabled');
			$('#form-l .block-1b #dv-1bl').removeAttr('checked');
			$('#form-l .block-1b #dv-2bl').attr('disabled','disabled');
			$('#form-l .block-1b #dv-2bl').removeAttr('checked');
	}
	});
	
	$('#form-g2 #dv-1ag2, #form-g2 #dv-2ag2').change(function(){
	if ($('#form-g2 #dv-2ag2').attr('checked')){
			$('#form-g2 .block-1b').removeClass('disabled');
			$('#form-g2 .block-1b #dv-1bg2').removeAttr('disabled');
			$('#form-g2 .block-1b #dv-1bg2').attr('checked','checked');
			$('#form-g2 .block-1b #dv-2bg2').removeAttr('disabled');
	} else {
			$('#form-g2 .block-1b').addClass('disabled');
			$('#form-g2 .block-1b #dv-1bg2').attr('disabled','disabled');
			$('#form-g2 .block-1b #dv-1bg2').removeAttr('checked');
			$('#form-g2 .block-1b #dv-2bg2').attr('disabled','disabled');
			$('#form-g2 .block-1b #dv-2bg2').removeAttr('checked');
	}
	});
	
	$('#form-g2 #dv-1g2, #form-g2 #dv-2g2').change(function(){
	if ($('#form-g2 #dv-2g2').attr('checked')){
			$('#form-g2 .block-5g2').removeClass('disabled');
			$('#form-g2 .block-5g2 select').removeAttr('disabled');
			$('#form-g2 .block-5g2 select').eq(0).show();
			$('#form-g2 .block-5g2 select.hide').hide();
		
	} else {
			$('#form-g2 .block-5g2').addClass('disabled');
			$('#form-g2 .block-5g2 select').attr('disabled','disabled');
			$('#form-g2 .block-5g2 select').eq(0).hide();
			$('#form-g2 .block-5g2 select.hide').show();
	}
	});
	
});