document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady()
{
	jQuery(function($) {
		/**
		 * Retrieve Users
		 */
		$('#miContabilidadGetUsers').on('click', function(e) {
			e.preventDefault();
	
			spinnerStart();
	
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'http://localhost:8888/api/users',
				success: function (data) {
					$('#ajaxResponse').text(JSON.stringify(data));
					spinnerEnd();
				},
				error: function (resp) {
					// Add the response text
					$('#ajaxResponse').text(JSON.stringify(resp));
					spinnerEnd();
				}
			});
		});
	});
}

function spinnerStart()
{
	SpinnerPlugin.activityStart('Cargando...', function() {}, function() {});
}

function spinnerEnd()
{
	SpinnerPlugin.activityStop(function() {}, function() {});
}